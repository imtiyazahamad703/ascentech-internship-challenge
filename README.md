# Hall Booking Management System

A simple Hall Booking Management System built using **React**, **Node.js**, **Express**, **PostgreSQL**, and **Prisma ORM (v5)**.  

---

## Loom Video

Loom Video: https://drive.google.com/drive/folders/1VLv5HCB0NJ4ZbvKae44zVzYJ6hsZmdm4?usp=drive_link

---

## Prerequisites

Make sure the following are installed on your system:

- Node.js
- npm (comes with Node.js)
- PostgreSQL
- Git

---

## Backend Setup (Node.js + Prisma ORM v5)

### 1. Clone the Repository
```bash
git clone https://github.com/imtiyazahamad703/ascentech-internship-challenge.git
```

### 2. Go to Backend Folder
```bash
cd hall-booking-backend
```

### 3. Install Dependencies
```bash
npm install
npm install express cors dotenv
```

---

### 4. Prisma ORM Setup (Version 5)
```bash
npm init -y
npm install prisma@5 @prisma/client@5 --save-dev
npx prisma init
```

---

### 5. PostgreSQL Database Setup

```sql
CREATE USER imtiyaz WITH PASSWORD 'your_password';
CREATE DATABASE hall_booking OWNER imtiyaz;
GRANT ALL PRIVILEGES ON DATABASE hall_booking TO imtiyaz;
GRANT ALL ON SCHEMA public TO imtiyaz;
```

---

### 6. Create `.env` File in Backend Root

```env
DATABASE_URL=postgresql://imtiyaz:your_password@localhost:5432/hall_booking
PORT=5000
```

---

### 7. Run Prisma Migration
```bash
npx prisma migrate dev --name init
```

---

### 8. Start Backend Server
```bash
node src/server.js
```

Backend runs on:
```
http://localhost:5000
```

---

## Frontend Setup (React)

### 1. Go to Frontend Folder
```bash
cd hall-booking-frontend
```

### 2. Install Dependencies
```bash
npm install
npm install react react-router-dom axios
```

---

### 3. Start Frontend
```bash
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## Features

- Create Hall Booking
- List All Bookings
- Update Booking
- Delete Booking
- Search Booking by ID
- Prisma ORM for all CRUD operations
- Clean Controller / Service architecture
- Environment variable based configuration

---

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: PostgreSQL
- ORM: Prisma ORM (v5)

---

## Author
Imtiyaz Ahamad
