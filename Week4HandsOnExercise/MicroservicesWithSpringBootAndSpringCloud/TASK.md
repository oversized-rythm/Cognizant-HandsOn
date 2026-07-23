# WEEK 04 : Microservices with Spring Boot and Spring Cloud

<hr>

## Hands-on 1 : Creating Microservices for Account and Loan

### Objective

In this hands-on exercise, we will create two independent Spring Boot RESTful microservices for a banking application.

- **Account Microservice**
- **Loan Microservice**

Each microservice will be a separate Maven project with its own `pom.xml`, application class, and REST controller. No database connectivity is required; the services will return dummy JSON responses.

---
## Project Workspace Structure

```text
microservices/
├── account/
└── loan/
```

---

## Account Microservice

### Step 1 : Create Spring Boot Project

Create a Spring Boot project from **Spring Initializr** with the following configuration:

| Property | Value |
|----------|-------|
| Group | `com.cognizant` |
| Artifact | `account` |
| Dependencies | Spring Web, Spring Boot DevTools |

Import the project into **IntelliJ IDEA**.

---

### Step 2 : Build the Project

Build the project using Maven:

```bash
mvn clean package
```

---

### Step 3 : Create REST API

Create a REST controller that returns dummy account details.

#### Endpoint

```http
GET /accounts/{number}
```

#### Sample Response

```json
{
    "number": "00987987973432",
    "type": "savings",
    "balance": 234343
}
```

---

### Step 4 : Run the Application

Run the Spring Boot application and test the endpoint using:

- Browser
- Postman

Example:

```
http://localhost:8080/accounts/00987987973432
```

---

## Loan Microservice

### Step 1 : Create Spring Boot Project

Create another Spring Boot project using Spring Initializr.

| Property | Value |
|----------|-------|
| Group | `com.cognizant` |
| Artifact | `loan` |
| Dependencies | Spring Web, Spring Boot DevTools |

Import the project into **IntelliJ IDEA**.

---

### Step 2 : Build the Project

```bash
mvn clean package
```

---

### Step 3 : Create REST API

Implement a REST controller that returns dummy loan details.

#### Endpoint

```http
GET /loans/{number}
```

#### Sample Response

```json
{
    "number": "H00987987972342",
    "type": "car",
    "loan": 400000,
    "emi": 3258,
    "tenure": 18
}
```

---

### Step 4 : Configure Different Server Port

Since the Account microservice already runs on port **8080**, configure the Loan microservice to run on **8081**.

Add the following property to:

```
src/main/resources/application.properties
```

```properties
server.port=8081
```

---

### Step 5 : Run the Application

Launch the Loan microservice.

Test using:

```
http://localhost:8081/loans/H00987987972342
```

---

## Expected Outcome

After completing this hands-on exercise:

- Two independent Spring Boot microservices are created.
- Each microservice is a separate Maven project.
- Account Service runs on **port 8080**.
- Loan Service runs on **port 8081**.
- Both services expose REST APIs returning dummy JSON responses.
- Both services can run simultaneously without port conflicts.

---

