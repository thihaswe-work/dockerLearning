# 🚀 Docker Learning Repo

This repository is a simple guide to help you learn and practice basic Docker commands.

---

## 📦 Docker Commands

### 🔹 View Images
```bash
docker images
```
🔹 View Containers
```bash
docker ps -a
```

🔹 Pull an Image
```bash
docker pull {container_name}:{tag}
```

🔹 Start an Existing Container
```bash
docker start {id} or {name}
```

🔹 Build an Image
```bash
docker build -t {container_name}:{tag} .
```

🔹 Run a Container
```bash
docker run --name {running_name} -d -p {host_port:container_port} {container_name}
```



