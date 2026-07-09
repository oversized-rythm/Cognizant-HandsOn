-- Scenario 1: Apply 1% discount on loan interest rate for customers above 60

BEGIN
    FOR customer_rec IN (
        SELECT c.customer_id
        FROM customers c
        WHERE c.age > 60
    )
    LOOP
        UPDATE loans
        SET interest_rate = interest_rate - 1
        WHERE customer_id = customer_rec.customer_id;
    END LOOP;

    COMMIT;
END;
/


-- Scenario 2: Set IsVIP flag for customers with balance over 10000

BEGIN
    FOR customer_rec IN (
        SELECT customer_id
        FROM customers
        WHERE balance > 10000
    )
    LOOP
        UPDATE customers
        SET isvip = 'TRUE'
        WHERE customer_id = customer_rec.customer_id;
    END LOOP;

    COMMIT;
END;
/


-- Scenario 3: Print reminders for loans due within next 30 days

SET SERVEROUTPUT ON;

BEGIN
    FOR loan_rec IN (
        SELECT c.customer_name, l.loan_id, l.due_date
        FROM customers c
        JOIN loans l
        ON c.customer_id = l.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear ' || loan_rec.customer_name ||
            ', your loan ID ' || loan_rec.loan_id ||
            ' is due on ' || loan_rec.due_date
        );
    END LOOP;
END;
/