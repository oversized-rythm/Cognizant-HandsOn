BEGIN
FOR loan_rec IN (
        SELECT c.Name,
               l.EndDate
        FROM Customers c
        JOIN Loans l
            ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear '
            || loan_rec.Name
            || ', your loan is due on '
            || TO_CHAR(loan_rec.EndDate,'DD-MON-YYYY')
        );
END LOOP;
END;
/