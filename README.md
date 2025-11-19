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

🔹 Remove Containers
```bash
docker rm {container_name or container_id}
```

🔹Remove Images
```bash
docker rmi {repository_name}
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

🔹Build docker-compose.yml
```bash
docker-compose build --no-cache{remove previous}
```
🔹Run docker-compose.yml
```bash
docker-compose up 
```
🔹 Down docker-compose.yml
```bash
docker-compose down
```

🔹Cleans build cache created by Docker BuildKit.
```bash
docker builder prune -a
```

🔹Cleans everything unused in Docker.
```bash
docker system prune -af
```

🔹 Start all containers 
```bash
docker-compose -f docker-compose.yml or docker-compose.yaml up
```

🔹 Down and Remove all containers 
```bash
docker-compose -f docker-compose.yml or docker-compose.yaml down
```


🔹Start all containers in the background
```bash
docker-compose up -d
```

🔹 Seed the database via the backend container
```bash
docker-compose run backend npm run seed
```




`-d` or  `--detach` means detach mode
</br>
`-t` or `--tag` means tag
</br>
`-p` or `--port` means port
</br>
`--name` means gives name to the container



