# ConClick Analytics - Quick Start Guide

Get ConClick Analytics up and running in under 5 minutes!

## 🚀 Fastest Method: Docker Compose

### Prerequisites
- Docker and Docker Compose installed
- 5 minutes of your time

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/isauravwagh/conclick.git
   cd conclick
   ```

2. **Generate a secret key**
   ```bash
   openssl rand -base64 32
   ```
   Copy the output - you'll need it in the next step.

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set the `APP_SECRET`:
   ```env
   APP_SECRET=paste-your-generated-key-here
   ```

4. **Start the services**
   ```bash
   docker compose up -d
   ```

5. **Access ConClick Analytics**
   - Open your browser to: `http://localhost:3000`
   - Login with:
     - **Username:** `admin`
     - **Password:** `umami`
   - **⚠️ IMPORTANT:** Change the password immediately!

## ✅ That's it! You're ready to add your first website.

---

## 📊 Add Your First Website

1. Go to **Settings** → **Websites**
2. Click **Add Website**
3. Enter:
   - **Name**: My Website
   - **Domain**: yourdomain.com
4. Click **Save**
5. Copy the tracking code

## 📝 Install Tracking Code

Add this to your website's `<head>` section:

```html
<script
  async
  src="http://localhost:3000/analytics.js"
  data-website-id="your-website-id"
></script>
```

Replace:
- `localhost:3000` with your domain (in production)
- `your-website-id` with the ID from the dashboard

---

## 🎨 Quick Customization

### Change Brand Colors

Edit `src/styles/variables.css`:

```css
html body {
  --primary-color: #0066FF;  /* Change this to your brand color */
  --accent-color: #10B981;   /* Change this to your accent color */
}
```

Rebuild:
```bash
docker compose down
docker compose up -d --build
```

### Change Application Name

Edit `.env`:
```env
APP_NAME=Your Analytics Platform
COMPANY_NAME=Your Company
```

Restart:
```bash
docker compose restart
```

---

## 🔧 Common Tasks

### View Logs
```bash
docker compose logs -f conclick
```

### Stop Services
```bash
docker compose down
```

### Update ConClick
```bash
git pull
docker compose pull
docker compose up -d --force-recreate
```

### Backup Database
```bash
docker exec conclick-db pg_dump -U conclick conclick > backup.sql
```

### Restore Database
```bash
cat backup.sql | docker exec -i conclick-db psql -U conclick conclick
```

---

## 🌐 Production Deployment

For production, you'll need:

1. **A domain name** (e.g., analytics.yourdomain.com)
2. **SSL certificate** (Let's Encrypt is free)
3. **Reverse proxy** (Nginx or Caddy)

### Quick Nginx Setup

```nginx
server {
    listen 443 ssl;
    server_name analytics.yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

---

## 📚 Next Steps

- [Full Installation Guide](./docs/INSTALLATION.md)
- [Customization Guide](./docs/CUSTOMIZATION.md)
- [White-Label Guide](./docs/WHITE_LABEL_GUIDE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

---

## ❓ Troubleshooting

### Can't access http://localhost:3000

**Check if services are running:**
```bash
docker compose ps
```

**Check logs:**
```bash
docker compose logs conclick
```

**Try rebuilding:**
```bash
docker compose down
docker compose up -d --build
```

### Port 3000 is already in use

**Change the port in docker-compose.yml:**
```yaml
ports:
  - "3001:3000"  # Use port 3001 instead
```

### Database connection error

**Check database is running:**
```bash
docker compose ps db
```

**Restart database:**
```bash
docker compose restart db
```

---

## 💡 Pro Tips

1. **Bypass Ad Blockers**: Change `TRACKER_SCRIPT_NAME` to something like `stats.js` or `collect.js`

2. **Better Performance**: Use a CDN for the tracker script

3. **Multiple Websites**: One ConClick instance can track unlimited websites

4. **API Access**: Use the API to build custom dashboards and integrations

5. **Custom Events**: Track button clicks, form submissions, purchases, etc.

---

## 🛟 Need Help?

- 📧 Email: [support@conclick.io](mailto:support@conclick.io)
- 🐛 Issues: [GitHub Issues](https://github.com/isauravwagh/conclick/issues)
- 📚 Docs: [Full Documentation](./docs/)

---

**Happy analyzing! 📊**
