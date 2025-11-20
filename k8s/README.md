# Kubernetes Deployment for Talent Platform

This directory contains Kubernetes manifests for deploying the Talent Platform application.

## Prerequisites

- Kubernetes cluster (v1.19+)
- kubectl configured to connect to your cluster
- Docker images built for frontend and backend components

## Building Docker Images

Before deploying to Kubernetes, build the Docker images:

```bash
# Build backend image
cd backend
docker build -t backend:latest .

# Build frontend image
cd frontend
docker build -t frontend:latest .
```

## Deployment Order

Deploy the components in the following order:

1. **MongoDB** - Database service
2. **Backend ConfigMap** - Configuration for backend application
3. **Backend Deployment & Service** - Backend API service
4. **Frontend ConfigMap** - Configuration for frontend application
5. **Frontend Deployment & Service** - Frontend web application

## Deploying to Kubernetes

Apply all manifests:

```bash
# Deploy MongoDB
kubectl apply -f k8s/mongodb-deployment.yaml

# Deploy Backend
kubectl apply -f k8s/backend-configmap.yaml
kubectl apply -f k8s/backend-deployment.yaml

# Deploy Frontend
kubectl apply -f k8s/frontend-configmap.yaml
kubectl apply -f k8s/frontend-deployment.yaml
```

Or deploy all at once:

```bash
kubectl apply -f k8s/
```

## Verifying Deployment

Check the status of your deployments:

```bash
# Check all pods
kubectl get pods

# Check all services
kubectl get services

# Check deployments
kubectl get deployments

# Check configmaps
kubectl get configmaps
```

## Accessing the Application

### Frontend

The frontend service is exposed as a LoadBalancer. Get the external IP:

```bash
kubectl get service frontend
```

Access the application at `http://<EXTERNAL-IP>`

### Backend API

The backend service is exposed internally. To access it from outside the cluster for testing:

```bash
kubectl port-forward service/backend 3001:3001
```

Then access the API at `http://localhost:3001`

## Architecture

- **MongoDB**: Single replica database (consider using StatefulSet for production)
- **Backend**: 2 replicas with health checks
  - Port 3001: REST API
  - Port 8080: WebSocket
- **Frontend**: 2 replicas with health checks
  - Port 80: Web application (nginx)

## Configuration

### Backend ConfigMap

Contains environment variables:
- `PORT`: Backend API port (3001)
- `DOCKER_URL`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication

### Frontend ConfigMap

Contains environment variables:
- `VITE_API_URL`: Backend API URL
- `VITE_WS_URL`: Backend WebSocket URL

## Scaling

Scale deployments as needed:

```bash
# Scale backend
kubectl scale deployment backend --replicas=3

# Scale frontend
kubectl scale deployment frontend --replicas=3
```

## Troubleshooting

### Check pod logs

```bash
# Backend logs
kubectl logs -l app=backend

# Frontend logs
kubectl logs -l app=frontend

# MongoDB logs
kubectl logs -l app=mongodb
```

### Check pod details

```bash
kubectl describe pod <pod-name>
```

### Common Issues

1. **ImagePullBackOff**: Ensure Docker images are built and available in your registry
2. **CrashLoopBackOff**: Check pod logs for application errors
3. **Pending Pods**: Check if your cluster has sufficient resources

## Production Considerations

For production deployments, consider:

1. **Persistent Storage**: Use PersistentVolumeClaims for MongoDB data
2. **Secrets Management**: Use Kubernetes Secrets for sensitive data (JWT_SECRET, MongoDB credentials)
3. **Resource Limits**: Define resource requests and limits for containers
4. **Ingress Controller**: Use Ingress instead of LoadBalancer for better routing
5. **Monitoring**: Add monitoring and logging solutions (Prometheus, Grafana, ELK)
6. **High Availability**: Increase replicas and use pod anti-affinity rules
7. **StatefulSet for MongoDB**: For production-grade database deployment

## Cleanup

Remove all deployed resources:

```bash
kubectl delete -f k8s/
```
