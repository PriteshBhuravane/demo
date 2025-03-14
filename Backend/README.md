# QuickRide Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body must be a JSON object containing the following fields:

- `email` (string, required): The email of the user. Must be a valid email format.
- `fullname` (object, required): An object containing the user's full name.
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Responses

- `201 Created`: User successfully registered.
  - Response Body: The created user object.
- `400 Bad Request`: Missing or invalid fields in the request body.
  - Response Body: An error message indicating the issue.
- `409 Conflict`: A user with the provided email already exists.
  - Response Body: An error message indicating the conflict.

#### Example Request
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepassword123"
}
```

#### Example Response
```json
{
  "_id": "60c72b2f9b1e8b001c8e4d3b",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com"
}
```

### POST /users/login

#### Description
This endpoint is used to login a user.

#### Request Body
The request body must be a JSON object containing the following fields:

- `email` (string, required): The email of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Responses

- `200 OK`: User successfully logged in.
  - Response Body: A JSON object containing the JWT token and user details.
- `400 Bad Request`: Missing or invalid fields in the request body.
  - Response Body: An error message indicating the issue.
- `401 Unauthorized`: Invalid email or password.
  - Response Body: An error message indicating the authentication failure.

#### Example Request
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

#### Example Response
```json
{
  "token": "jwt-token",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d3b",
    "email": "user@example.com",
    // ...other user fields...
  }
}
```

### GET /users/profile

#### Description
This endpoint is used to get the profile of the authenticated user.

#### Responses

- `200 OK`: User profile successfully retrieved.
  - Response Body: A JSON object containing the user profile details.
- `401 Unauthorized`: User is not authenticated.
  - Response Body: An error message indicating the authentication failure.

#### Example Response
```json
{
  "_id": "60c72b2f9b1e8b001c8e4d3b",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com"
}
```

### GET /users/logout

#### Description
This endpoint is used to logout the authenticated user.

#### Responses

- `200 OK`: User successfully logged out.
  - Response Body: A message indicating successful logout.
- `401 Unauthorized`: User is not authenticated.
  - Response Body: An error message indicating the authentication failure.

#### Example Response
```json
{
  "message": "Logged out successfully"
}
```
# QuickRide Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body must be a JSON object containing the following fields:

- `email` (string, required): The email of the user. Must be a valid email format.
- `fullname` (object, required): An object containing the user's full name.
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Responses

- `201 Created`: User successfully registered.
  - Response Body: The created user object.
- `400 Bad Request`: Missing or invalid fields in the request body.
  - Response Body: An error message indicating the issue.
- `409 Conflict`: A user with the provided email already exists.
  - Response Body: An error message indicating the conflict.

#### Example Request
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepassword123"
}
```

#### Example Response
```json
{
  "_id": "60c72b2f9b1e8b001c8e4d3b",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com"
}
```

### POST /users/login

#### Description
This endpoint is used to login a user.

#### Request Body
The request body must be a JSON object containing the following fields:

- `email` (string, required): The email of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Responses

- `200 OK`: User successfully logged in.
  - Response Body: A JSON object containing the JWT token and user details.
- `400 Bad Request`: Missing or invalid fields in the request body.
  - Response Body: An error message indicating the issue.
- `401 Unauthorized`: Invalid email or password.
  - Response Body: An error message indicating the authentication failure.

#### Example Request
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

#### Example Response
```json
{
  "token": "jwt-token",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d3b",
    "email": "user@example.com",
    // ...other user fields...
  }
}
```

### GET /users/profile

#### Description
This endpoint is used to get the profile of the authenticated user.

#### Responses

- `200 OK`: User profile successfully retrieved.
  - Response Body: A JSON object containing the user profile details.
- `401 Unauthorized`: User is not authenticated.
  - Response Body: An error message indicating the authentication failure.

#### Example Response
```json
{
  "_id": "60c72b2f9b1e8b001c8e4d3b",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com"
}
```

### GET /users/logout

#### Description
This endpoint is used to logout the authenticated user.

#### Responses

- `200 OK`: User successfully logged out.
  - Response Body: A message indicating successful logout.
- `401 Unauthorized`: User is not authenticated.
  - Response Body: An error message indicating the authentication failure.

#### Example Response
```json
{
  "message": "Logged out successfully"
}
```

### POST /captains/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body must be a JSON object containing the following fields:

- `email` (string, required): The email of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 5 characters long.
- `fullname` (object, required): An object containing the captain's full name.
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `vehicle` (object, required): An object containing the vehicle details.
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

#### Responses

- `201 Created`: Captain successfully registered.
  - Response Body: The created captain object along with the JWT token.
- `400 Bad Request`: Missing or invalid fields in the request body.
  - Response Body: An error message indicating the issue.
- `409 Conflict`: A captain with the provided email already exists.
  - Response Body: An error message indicating the conflict.

#### Example Request
```json
{
  "email": "captain@example.com",
  "password": "securepassword123",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Example Response
```json
{
  "token": "jwt-token",
  "captain": {
    "_id": "60c72b2f9b1e8b001c8e4d3b",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
# QuickRide Backend API Documentation

## Endpoints

### POST /captains/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body must be a JSON object containing the following fields:

```json
{
  "email": "captain@example.com", // string, required, must be a valid email format
  "password": "securepassword123", // string, required, must be at least 5 characters long
  "fullname": {
    "firstname": "Jane", // string, required, must be at least 3 characters long
    "lastname": "Doe" // string, optional, must be at least 3 characters long if provided
  },
  "vehicle": {
    "color": "Red", // string, required, must be at least 3 characters long
    "plate": "XYZ123", // string, required, must be at least 3 characters long
    "capacity": 4, // number, required, must be at least 1
    "vehicleType": "car" // string, required, must be one of 'car', 'motorcycle', or 'auto'
  }
}
```

#### Responses

- `201 Created`: Captain successfully registered.
  - Response Body:
  ```json
  {
    "token": "jwt-token",
    "captain": {
      "_id": "60c72b2f9b1e8b001c8e4d3b",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "captain@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```
- `400 Bad Request`: Missing or invalid fields in the request body.
  - Response Body:
  ```json
  {
    "errors": [
      {
        "msg": "Please enter a valid email address",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 5 character long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "First name must be 3 character long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "color must be at least 3 character long",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 character long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```
- `409 Conflict`: A captain with the provided email already exists.
  - Response Body:
  ```json
  {
    "message": "Captain already exists"
  }
  ```

### POST /captains/login

#### Description
This endpoint is used to login a captain.

#### Request Body
The request body must be a JSON object containing the following fields:

```json
{
  "email": "captain@example.com", // string, required, must be a valid email format
  "password": "securepassword123" // string, required, must be at least 5 characters long
}
```

#### Responses

- `200 OK`: Captain successfully logged in.
  - Response Body:
  ```json
  {
    "token": "jwt-token",
    "captain": {
      "_id": "60c72b2f9b1e8b001c8e4d3b",
      "email": "captain@example.com",
      // ...other captain fields...
    }
  }
  ```
- `400 Bad Request`: Missing or invalid fields in the request body.
  - Response Body:
  ```json
  {
    "errors": [
      {
        "msg": "Please enter a valid email address",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 5 character long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```
- `401 Unauthorized`: Invalid email or password.
  - Response Body:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### GET /captains/profile

#### Description
This endpoint is used to get the profile of the authenticated captain.

#### Responses

- `200 OK`: Captain profile successfully retrieved.
  - Response Body:
  ```json
  {
    "captain": {
      "_id": "60c72b2f9b1e8b001c8e4d3b",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "captain@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```
- `401 Unauthorized`: Captain is not authenticated.
  - Response Body:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### GET /captains/logout

#### Description
This endpoint is used to logout the authenticated captain.

#### Responses

- `200 OK`: Captain successfully logged out.
  - Response Body:
  ```json
  {
    "message": "Logout successfully"
  }
  ```
- `401 Unauthorized`: Captain is not authenticated.
  - Response Body:
  ```json
  {
    "message": "Authentication required"
  }
  ```
```