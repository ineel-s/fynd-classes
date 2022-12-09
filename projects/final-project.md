## ER Diagram
_Reference_: https://www.tutorialspoint.com/dbms/er_diagram_representation.htm

- Have clarity on what is the app about? What problem are you trying to solve? Whose problem are you trying to solve, i.e. who are the users of the app?
- What are the features of the app?
    - Registered users can create meetings
    - Users can search for meetings
    - Users can form teams with other registered users
    - User can view calendar for any day

## ER Diagram
- Decide what entities are there in the database
    - What are you storing data about? - Based on this you decide what collections will be there in the DB
        - Meetings
        - Users
        - Teams
    - Name of meeting, email of user, shortname of team - are these entities? NO. These are fields in the respective entities
    - Decides the fields (and data types) to store regarding the entities
    - Figure out the "relationships" between entities
        - A meeting has attendees (array of "users") -> Thus, "Meeting" entity is related to "User" entity
        - A team has members (array of "users") -> Thus, "Team" entity is related to "User" entity
    - Find out the "cardinality" of the relationship
        - "1" meeting has "multiple" attendees. "1" attendee can be part of "multiple" meetings (M:N)
    - Represent this information in an Entity-Relationship relationship