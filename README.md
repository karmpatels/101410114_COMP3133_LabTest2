# 101410114_COMP3133_LabTest2 - SpaceX Missions Angular Application

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SpaceX API](https://img.shields.io/badge/SpaceX_API-000000?style=for-the-badge&logo=spacex&logoColor=white)

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development Server](#development-server)
- [Build](#build)
- [Hosting](#hosting)
- [API Endpoints](#api-endpoints)
- [Component Structure](#component-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Description
This Angular application displays SpaceX launch missions using the official SpaceX REST API. The project was developed as part of COMP 3133 Lab Test 2 requirements, showcasing Angular fundamentals, API integration, and Material Design implementation.

**Student ID**: 101410114  
**Course**: COMP 3133  
**Submission Date**: April 2, 2025

## Features
- 🚀 View all SpaceX launches with mission details
- 🔍 Filter launches by year
- 📱 Responsive design with Angular Material
- 🔗 Detailed view for each mission
- 🔄 Real-time data from SpaceX API

## Technologies Used
- Angular 15+
- TypeScript
- Angular Material
- Flex Layout
- SpaceX REST API
- RxJS
- HTML5/SCSS

## Installation

1. Clone the repository:
```bash
git clone https://github.com/karmpatels/101410114_COMP3133_LabTest2.git
cd 101410114_COMP3133_LabTest2
```
2. Install Dependencies:
```bash
npm install
```
3. Development Server
Run ng serve for a dev server. Navigate to http://localhost:4200/
```bash
ng serve
```
4. Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory.
```bash
ng build --prod
```
5. Hosting

The application is hosted on Vercel.
Live demo: https://101410114-comp3133-labtest2.vercel.app

## API Endpoints

This project uses the following SpaceX API endpoints:

* All launches: https://api.spacexdata.com/v3/launches
* Filter by year: https://api.spacexdata.com/v3/launches?launch_year={year}
* Single launch: https://api.spacexdata.com/v3/launches/{flight_number}

## Component Structure

```bash
src/app/
├── missionlist/           # Main missions list view
├── missiondetails/        # Detailed mission view
├── missionfilter/         # Year filter component
├── services/              # SpaceX API service
├── models/                # TypeScript interfaces
├── app-routing.module.ts  # Routing configuration
└── app.module.ts          # Main application module
```
## License

Distributed under the MIT License. See LICENSE for more information.

This README provides comprehensive documentation that meets academic requirements while being professional enough for public GitHub visibility. It covers all aspects from installation to deployment, with clear section headers for easy navigation.