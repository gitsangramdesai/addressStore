# AddressStore

AddressStore is an API-based application that allows users or client applications to store and manage addresses associated with email addresses. It provides a centralized way for websites and applications to retrieve stored address information through REST APIs.

## Features

- **Store Addresses** — Save address details associated with an email address.
- **Retrieve Addresses** — Fetch saved addresses using an email address.
- **Delete Addresses** — Remove stored address records when they are no longer required.
- **REST API Integration** — Allow authorized websites and applications to access address data through API endpoints.
- **Centralized Address Management** — Maintain address information in one place instead of storing duplicate data across multiple websites.
- **Reusable API** — Integrate address retrieval into multiple websites and applications.

## Use Cases

AddressStore can be integrated with:

- E-commerce websites for retrieving customer shipping addresses.
- Registration and checkout forms to simplify address entry.
- Customer portals that need access to previously saved addresses.
- Multiple websites that share address information through a common backend API.

## How It Works

1. A client application submits an email address and address details to the API.
2. AddressStore saves the address associated with that email address.
3. An authorized client application requests the stored addresses using the relevant email address.
4. The API returns the matching address records in JSON format.
5. Client applications can use the returned data to populate their address forms.

## Example API Response

A successful address retrieval request may return a response like this:

```json
{
  "message": "Addresses fetched successfully",
  "metadata": "address",
  "success": true,
  "data": [
    {
      "id": 1,
      "email": "customer@example.com",
      "address1": "123 Main Street",
      "address2": "Apartment 4",
      "city": "Mumbai"
    }
  ]
}
```

*The response fields shown above are illustrative; the actual fields depend on the API implementation.*

## API Operations

| Operation | Description |
|---|---|
| Create address | Store an address against an email address |
| Retrieve addresses | Fetch addresses associated with an email address |
| Delete address | Delete a saved address record |

Refer to the application's API routes or API documentation for the actual endpoint paths, HTTP methods, request parameters, and response formats.

## Technology Stack

Update this section to match the actual implementation.

- **Backend:** Node.js and Express.js
- **Database:** Sequelize ORM with a relational database
- **API Style:** REST API
- **Data Format:** JSON

## Getting Started

### Prerequisites

Install the required software:

- Node.js and npm
- The database configured for the application

### Installation

Clone the repository:

```bash
git clone https://github.com/gitsangramdesai/addressStore.git
cd addressStore
```

Install dependencies:

```bash
npm install
```

Configure the required environment variables and database connection before starting the application.

### Run the Application

Use the start script defined in `package.json`, for example:

```bash
npm start
```

The API will run at the host and port configured by the application.

## Security and Privacy

Address information is personal data and should be protected.

- Require authentication and authorization for API access.
- Verify that callers are permitted to access addresses associated with a given email address.
- Use HTTPS for API communication.
- Validate and sanitize incoming request data.
- Store database credentials and secrets in environment variables.
- Avoid exposing address information to unauthorized websites or users.
- Provide appropriate data deletion and retention controls.

## Future Enhancements

Potential improvements include:

- API key or token-based authentication.
- Address updates and validation.
- API rate limiting and request logging.
- OpenAPI/Swagger documentation.
- Automated tests and deployment workflows.

## License

Specify the license under which this project is distributed.

---

**AddressStore — One API for managing reusable address information across websites.**
