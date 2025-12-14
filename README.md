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

Screenshots:
<img width="1851" height="981" alt="image" src="https://github.com/user-attachments/assets/c445d02f-f691-4696-9dc2-2fe9de322b15" />
<img width="1783" height="1066" alt="image" src="https://github.com/user-attachments/assets/a5fca844-215e-470d-8d61-f95ae2bd6d01" />
<img width="1799" height="1079" alt="image" src="https://github.com/user-attachments/assets/de3d40c9-dd05-4bd0-997a-87303ff6731c" />
<img width="1811" height="1079" alt="image" src="https://github.com/user-attachments/assets/a21616c2-195f-4663-99e3-ec5ae04f26cd" />
<img width="1784" height="1079" alt="image" src="https://github.com/user-attachments/assets/f364e0d2-dc53-4a2c-812a-631849a3706e" />
<img width="1841" height="1079" alt="image" src="https://github.com/user-attachments/assets/1d1a8780-6d5d-4a93-8dd4-c0e7e16d2049" />







---
## Author
Imtiyaz Ahamad
