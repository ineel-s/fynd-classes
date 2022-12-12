# DataBase Management System (DBMS)
- A s/w that is a specialist at storing, retrieving, manipulating data
- Examples: MongoDB, MySQL, PostGreSQL, Oracle SQL, SQLite, GraphDB

## Types of DBMSes
- database - collection of data for an application
- Entity
    - Those things about which you store data
        - User
        - Meeting
        - Team
- A DBMS has multiple databases
- Graph databases
    - Neo4J
    - Social media: data with relationships
- Structured data
    - Fixed and rigid set of "fields"/"columns" for every entity
        - Example: Meeting WILL have only these data - date (Date), start time (Time), end time (Time), attendees, description (String)
    - "Schema"
        - for every entity we have a fixed set of fields, with a fixed data type for every field
    - RBDMS (Relational (Tabular) Database Management System) is good for structured data
        - store data in the form of tables
        - Meetings app "database"
        - In RDBMS every entity has a proper schema
        - A "row" repesents a single meeting (for example in the Meetings table), columns will represent the fields
    - Examples
        - PostGreSQL, MySQL, Oracle SQL, SQLite
- Semi-structured data
    - Not so rigid set of fields
        - Product stored in an online store
            - "color" field is not applicable for books, but applicable for phones
    - Document DBs are good for semi-structured data
    - Document DB represents a meeting as a "document"

- Database has collections
- Collection has documents
- Documents have fields


