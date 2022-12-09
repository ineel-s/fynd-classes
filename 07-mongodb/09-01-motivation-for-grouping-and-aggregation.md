## Motivation for grouping and aggregation
Tech                Category          Users
.NET                Backend          800000
JavaScript          Language        1000000
React               Frontend         100000
Python              Language         750000
Node                Backend          500000
Vue                 Frontend          50000
Java                Language        1500000
Spring              Backend         1200000
Angular             Frontend          75000

VLSI Design         Microprocessor    50000
Structural Design   Civil             25000

For every category, which tech has maximum users

Step 1: Group by category
Tech        Category        Users

.NET        Backend          800000
Node        Backend          500000
Spring      Backend         1200000

JavaScript  Language        1000000
Python      Language         750000
Java        Language        1500000

React       Frontend         100000
Vue         Frontend          50000
Angular     Frontend          75000

Step 2: Aggregation - Find the tech with highest #users in every group
Category       Max_Users    Avg_Users
Backend        1200000        833333
Language       1500000       1083333
Frontend        100000         75000

The "output collection" is different from the "input collection"

__NOTE__: We have to group by more than 1 field