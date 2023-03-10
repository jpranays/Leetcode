/* Write a SQL query to find all duplicate emails in a table named Person.

 +----+---------+
 | Id | Email   |
 +----+---------+
 | 1  | a@b.com |
 | 2  | c@d.com |
 | 3  | a@b.com |
 +----+---------+
 For example, your query should return the following for the above table;
 +---------+
 | Email   |
 +---------+
 | a@b.com |
 +---------+
 */
 select Email from (select email,count(email) as "count" from person group by email) as derivedtable where count > 1;