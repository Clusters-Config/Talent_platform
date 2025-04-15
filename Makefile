$Target = "Makefile"
.PHONY: frontend backend all

frontend:
	echo "Building frontend..."
	cd frontend && npm install && npm run dev 
	echo "Frontend build complete."

backend:
	echo "Building backend..."
	cd backend && npm test
	echo "Backend build complete."

all: frontend backend
	echo "Building all components..."
	cd frontend && npm install && npm run build 
	cd backend && npm test
	echo "All components built successfully."


clean:
	echo "Cleaning up..."
	cd frontend && rm -rf node_modules && rm -rf dist
	cd backend && rm -rf node_modules
	echo "Cleanup complete."