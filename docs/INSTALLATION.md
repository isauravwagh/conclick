# ConClick Analytics - Installation Guide

This guide will walk you through installing ConClick Analytics on your infrastructure.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Methods](#installation-methods)
  - [Docker Compose (Recommended)](#docker-compose-recommended)
  - [Install from Source](#install-from-source)
  - [Cloud Deployment](#cloud-deployment)
- [Post-Installation](#post-installation)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before installing ConClick Analytics, ensure you have:

### Required
- **Node.js**: Version 18.18 or newer
- **PostgreSQL**: Version 12.14 or newer
- **Git**: For cloning the repository

### Recommended
- **Docker**: Version 20.10 or newer
- **Docker Compose**: Version 2.0 or newer

### System Resources

**Minimum Requirements:**
- 1 CPU core
- 512 MB RAM
- 2 GB disk space

**Recommended for Production:**
- 2+ CPU cores
- 2 GB+ RAM
- 10 GB+ disk space

---

## Installation Methods

### Docker Compose (Recommended)

This is the easiest method and recommended for most users.

#### Step 1: Clone the Repository

```bash
git clone https://github.com/isauravwagh/conclick.git
cd conclick
```

#### Step 2: Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Generate a random secret key
openssl rand -base64 32

# Edit .env and set APP_SECRET with the generated key
nano .env  # or use your preferred editor
```

**Minimum required settings in `.env`:**
```env
DATABASE_URL=postgresql://conclick:conclick@db:5432/conclick
APP_SECRET=your-generated-secret-key-here
```

#### Step 3: Start ConClick Analytics

```bash
# Start all services
docker compose up -d

# Check if services are running
docker compose ps

# View logs
docker compose logs -f conclick
```

#### Step 4: Access the Application

1. Open your browser to `http://localhost:3000`
2. Login with default credentials:
   - **Username:** `admin`
   - **Password:** `umami`
3. **IMPORTANT:** Change the password immediately!

---

### Install from Source

For development or custom deployments.

#### Step 1: Install Prerequisites

```bash
# Install Node.js (if not already installed)
# On Ubuntu/Debian:
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Verify installation
node --version  # Should be 18.18 or higher
pnpm --version
```

#### Step 2: Install PostgreSQL

```bash
# On Ubuntu/Debian:
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib

# Start PostgreSQL
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql << EOF
CREATE DATABASE conclick;
CREATE USER conclick WITH ENCRYPTED PASSWORD 'your-secure-password';
GRANT ALL PRIVILEGES ON DATABASE conclick TO conclick;
\q
EOF
```

#### Step 3: Clone and Install

```bash
# Clone repository
git clone https://github.com/isauravwagh/conclick.git
cd conclick

# Install dependencies
pnpm install
```

#### Step 4: Configure Environment

```bash
# Create .env file
cp .env.example .env

# Edit configuration
nano .env
```

**Set these variables:**
```env
DATABASE_URL=postgresql://conclick:your-secure-password@localhost:5432/conclick
APP_SECRET=your-generated-secret-key
```

#### Step 5: Build and Start

```bash
# Build the application (this creates database tables)
pnpm build

# Start the application
pnpm start

# Or for production with PM2:
npm install -g pm2
pm2 start pnpm --name conclick-analytics -- start
pm2 startup
pm2 save
```

#### Step 6: Access the Application

Open `http://localhost:3000` and login with `admin` / `umami`.

---

### Cloud Deployment

#### Vercel

1. Fork this repository to your GitHub account
2. Go to [Vercel](https://vercel.com) and import the project
3. Add environment variables:
   - `DATABASE_URL`
   - `APP_SECRET`
4. Deploy!

#### DigitalOcean App Platform

```bash
# Create app.yaml
cat > app.yaml << EOF
name: conclick-analytics
services:
- name: web
  github:
    repo: your-username/conclick
    branch: main
  env_vars:
  - key: DATABASE_URL
    value: \${db.DATABASE_URL}
  - key: APP_SECRET
    scope: RUN_TIME
    type: SECRET
databases:
- name: db
  engine: PG
  version: "15"
EOF

# Deploy using doctl
doctl apps create --spec app.yaml
```

#### AWS (EC2 with Docker)

```bash
# 1. Launch EC2 instance (t3.small or larger)

# 2. SSH into instance
ssh -i your-key.pem ubuntu@your-instance-ip

# 3. Install Docker
sudo apt-get update
sudo apt-get install -y docker.io docker-compose
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu

# 4. Clone and configure
git clone https://github.com/isauravwagh/conclick.git
cd conclick
cp .env.example .env
nano .env  # Configure environment

# 5. Start services
docker compose up -d
```

---

## Post-Installation

### 1. Change Default Password

1. Login with `admin` / `umami`
2. Go to **Settings** → **Profile**
3. Click **Change Password**
4. Enter new secure password

### 2. Add Your First Website

1. Go to **Settings** → **Websites**
2. Click **Add Website**
3. Fill in:
   - **Name**: Your website name
   - **Domain**: yourdomain.com
   - **Enable share URL**: Optional
4. Click **Save**

### 3. Install Tracking Code

Copy the tracking code and add to your website's `<head>`:

```html
<script
  async
  src="http://your-analytics-domain.com/analytics.js"
  data-website-id="your-website-id"
></script>
```

### 4. Set Up Reverse Proxy (Production)

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name analytics.yourdomain.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name analytics.yourdomain.com;

    # SSL Configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### Caddy Configuration

```
analytics.yourdomain.com {
    reverse_proxy localhost:3000
}
```

### 5. Configure Backup

```bash
# Create backup script
cat > /usr/local/bin/backup-conclick.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR=/backups/conclick
mkdir -p $BACKUP_DIR

# Backup database
docker exec conclick-db pg_dump -U conclick conclick | gzip > $BACKUP_DIR/conclick_$DATE.sql.gz

# Keep only last 30 days
find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete

echo "Backup completed: conclick_$DATE.sql.gz"
EOF

chmod +x /usr/local/bin/backup-conclick.sh

# Add to crontab (daily at 2 AM)
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/backup-conclick.sh") | crontab -
```

---

## Troubleshooting

### Database Connection Issues

```bash
# Check if database is running
docker compose ps db

# Check database logs
docker compose logs db

# Test database connection
docker exec -it conclick-db psql -U conclick -d conclick -c "SELECT 1;"
```

### Application Won't Start

```bash
# Check application logs
docker compose logs conclick

# Common issues:
# 1. APP_SECRET not set -> Set in .env
# 2. Database not ready -> Wait for healthcheck
# 3. Port 3000 in use -> Change port in docker-compose.yml
```

### Tracking Not Working

1. Check tracking code is installed correctly
2. Open browser developer tools → Network tab
3. Look for request to `/api/collect`
4. Check for ad blockers (rename tracker script if needed)

### Reset Admin Password

```bash
# Run password reset script
docker exec -it conclick-analytics npm run change-password

# Or from source:
pnpm change-password
```

---

## Next Steps

- [Customize your instance](./CUSTOMIZATION.md)
- [Configure deployment](./DEPLOYMENT.md)
- [API Documentation](./API.md)
- [Learn about tracking](./TRACKING.md)

---

## Need Help?

- 📧 Email: [support@conclick.io](mailto:support@conclick.io)
- 🐛 Issues: [GitHub Issues](https://github.com/isauravwagh/conclick/issues)
- 📚 Documentation: [https://docs.conclick.io](https://docs.conclick.io)
