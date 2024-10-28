# Backend Code Challenge

Create a backend API using Node.js, ideally leveraging Graphql, Typescript, Apollo Graphql Server and Typegraphql.
	
- Key Requirements
	- **Lenguage**: Typescript/Javascript
	- **Database**: Connect to Mysql Database 
	- **Bussiness Logic**:  Bussiness logic should be applied using Typescript/Javascript (avoid using sql or orm to apply validations)
	- **API Structure**:  Adhere to the specified data return formats
- Additional considerations:
	-  **Security**: Use JWT tokens to store claims data from user session, use it to authorize requests to the backend API, endpoints should read claims from session and fetch the correct information from the user session


# Database connectionstring

The connection string will be shared on zoho vault at the challenge time (please check the spam folder) and the entry key will be shared in the instructions email.

# Challenges
## Owner Access Token (JWT token) optional
Create an endpoint that generates an access token with owner information (Number,giveName+surname,Email)
this endpoint should receive Email and owner number and it should return a valid access token if this information match a record of the Owner table.

- JWT Token Example
	- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwib3duZXJJZCI6MzM3NjYsImlhdCI6MTUxNjIzOTAyMn0.JLoyymSzV_lnTHm6jVR8w2RUkvWxvwZgxX2GyK7Br1Y	
- Visit this website to decode it
		-	https://jwt.io/

## Owner profile

Create an endpoint that returns Owner profile info in the following format, roles can be fetch from ownerroles and roles

	- Number
	- GivenName+surname
	- Email
	- Roles
		- description
		- type

## Owner Available points 1
Create an endpoint that reads contractusage table from an owner and calculates and returns the correct amount of points base on the following rules.
- Allowed usage type (4,11,12,13,14,15)
- Based on startDate and endDate  return points from this year and next year
- contract should not be delinquent 
- contract should be active
- contract should not be Relase type
- contract usage details should return total points group by usage type
- total amount of points should be across all contract from the owner
return response in the following format

		- Total Amount of Points Remainig
			- Contract Usage Details
				- Usage Type Description
				- Total Amount of Points

## Owner Available points 2
Create an endpoint that reads contractusage table from an owner and calculates and returns the correct amount of points base on the following rules.
- Allowed usage type (27)
- Based on startDate and endDate return points from this year and next year
- contract should not be delinquent 
- contract should be active
- contract usage details should return total points group by usage type
- total amount of points should be across all contract from the owner
- response should included an array of deeded info from the owner contracts
return response in the following format

		- Total Amount of Points Remainig
			- Contract Usage Details
				- Usage Type Description
				- Total Amount of Points
		- Deeded Ownership
			- resortName
			- season
			- villa type

##  Owner Reservation History
Create and endpoint that returns the complete history of reservations

- Upcoming reservations should be in status "p" and end date should be before or equal to today
- Past reservations are all the reservations that are not in status "P" or check in and check out date is in the past
- Response should be in the following format

			- Upcoming Reservations
				 - Reservation Id
				- Site Name
				- Check in Date
				- Check out Date
				- status
			- Past Reservations
				 - Reservation Id
				- Site Name
				- Check in Date
				- Check out Date
				- status