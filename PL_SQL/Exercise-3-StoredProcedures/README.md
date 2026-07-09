## Testing

Run the following PL/SQL blocks to test the stored procedures:

```sql
SET SERVEROUTPUT ON;

BEGIN
    ProcessMonthlyInterest;
END;
/

BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/

BEGIN
    TransferFunds(101, 102, 500);
END;
/
```
