import java.sql.*;

public class TransactionDemo {

    public static void transfer(
            int fromAccount,
            int toAccount,
            double amount) {

        try {

            Connection con =
                    DriverManager.getConnection(
                            "jdbc:mysql://localhost:3306/bankdb",
                            "root",
                            "root");

            con.setAutoCommit(false);

            PreparedStatement debit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance = balance - ? WHERE id=?");

            debit.setDouble(1, amount);
            debit.setInt(2, fromAccount);
            debit.executeUpdate();

            PreparedStatement credit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance = balance + ? WHERE id=?");

            credit.setDouble(1, amount);
            credit.setInt(2, toAccount);
            credit.executeUpdate();

            con.commit();

            System.out.println("Transfer Successful");

        } catch (Exception e) {

            System.out.println("Transaction Failed");

            e.printStackTrace();
        }
    }
}