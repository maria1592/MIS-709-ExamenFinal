# FastAPI-React ToDo App

## 1. Descripción de la aplicación

Esta aplicación es un **sistema de lista de tareas (To-Do List)** desarrollado originalmente por [TenSzalik](https://github.com/TenSzalik/FastAPI-React-ToDo) y adaptada para el **examen final del módulo TJA / MIST-1-1-V-2025 / MIS-709: Containerization and Container Orchestration** (Par. 1).

La app utiliza la siguiente arquitectura tecnológica:

- **Frontend:** React
- **Backend/API:** FastAPI (Python)
- **Base de datos:** SQLite (persistente)
- **Cache / Messaging:** Redis
- **Reverse Proxy / Load Balancer:** Nginx

Funcionalidades principales:

- Crear, listar, actualizar y eliminar tareas.
- Comunicación eficiente entre frontend y backend vía API REST.
- Persistencia de datos y cacheo con Redis.
- Despliegue en contenedores Docker y orquestación con **Docker Swarm** y **Kubernetes**.

> Esta versión ha sido adaptada para cumplir los requerimientos del examen final de contenedorización y orquestación, incluyendo la creación de Dockerfiles optimizados, Docker Compose, Swarm Stack y manifiestos de Kubernetes.

---

## 2. Arquitectura general

### **Diagrama de servicios (ASCII)**

