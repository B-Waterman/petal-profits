-- insert user 
INSERT INTO users (first_name, last_name, email, password) VALUES ('Penny', 'Lane', 'plane@gmail.com', '1234');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Robin', 'Banks', 'rbanks@gmail.com', '1234');

-- insert accounts
INSERT INTO accounts (type, user_id, current_balance) VALUES ('chequing', 1, 10000.00);
INSERT INTO accounts (type, user_id, current_balance) VALUES ('credit', 1, -500.00);
INSERT INTO accounts (type, user_id, current_balance) VALUES ('savings', 1, 20000.00);
INSERT INTO accounts (type, user_id, current_balance) VALUES ('chequing', 2, 100000.00);
INSERT INTO accounts (type, user_id, current_balance) VALUES ('credit', 2, -44000.00);

-- insert plaid_accounts
INSERT INTO plaid_accounts () VALUES ();

-- insert categories
INSERT INTO categories (name) VALUES ('FOOD_AND_DRINK');
INSERT INTO categories (name) VALUES ('TRANSPORTATION');
INSERT INTO categories (name) VALUES ('TRANSFER_OUT');
INSERT INTO categories (name) VALUES ('TRANSFER_IN');
INSERT INTO categories (name) VALUES ('RENT_AND_UTILITIES');
INSERT INTO categories (name) VALUES ('Misc');
INSERT INTO categories (name) VALUES ('LOAN_PAYMENTS');
INSERT INTO categories (name) VALUES ('TRAVEL');
INSERT INTO categories (name) VALUES ('PERSONAL_CAR');

-- insert transactions
INSERT INTO transactions (account_id, transaction_date, transaction_amount, merchant_category_code, category_id, is_credit_card)
VALUES 
    (2,'2023-05-01', 35.12, '5411', 1, true),
    (2,'2023-05-02', 82.47, '5812', 1, true),
    (2,'2023-05-03', 19.99, '5499', 3, true),
    (2,'2023-05-04', 56.78, '5732', 2, false),
    (2,'2023-05-05', 12.34, '7832', 5, false),
    (2,'2023-05-06', 42.11, '5945', 7, true),
    (2,'2023-05-07', 65.23, '5814', 4, true),
    (1,'2023-05-08', 23.45, '5541', 4, false),
    (1,'2023-05-09', 17.89, '5813', 8, true),
    (1,'2023-05-10', 39.99, '5462', 6, false);

-- insert monthly balances
INSERT INTO monthly_balances (account_id, end_of_month, balance) VALUES (1, '2023-04-30', 9000.00);
INSERT INTO monthly_balances (account_id, end_of_month, balance) VALUES (1, '2023-03-30', 8000.00);
INSERT INTO monthly_balances (account_id, end_of_month, balance) VALUES (1, '2023-02-28', 7000.00);
INSERT INTO monthly_balances (account_id, end_of_month, balance) VALUES (2, '2023-04-30', -400.00);
INSERT INTO monthly_balances (account_id, end_of_month, balance) VALUES (2, '2023-03-30', 0.00);
INSERT INTO monthly_balances (account_id, end_of_month, balance) VALUES (2, '2023-02-28', -600.00);
INSERT INTO monthly_balances (account_id, end_of_month, balance) VALUES (3, '2023-04-30', 20000.00);
INSERT INTO monthly_balances (account_id, end_of_month, balance) VALUES (3, '2023-03-30', 20000.00);
INSERT INTO monthly_balances (account_id, end_of_month, balance) VALUES (3, '2023-02-28', 20000.00);

-- insert plant_goals
INSERT INTO plant_goals (name, interactive_image, tracked_amount, target_amount, user_id) VALUES ('Trip to Mexico', 'https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js', 20.00, 3000.00, 1);
INSERT INTO plant_goals (name, interactive_image, tracked_amount, target_amount, user_id) VALUES ('Pay off tuition', 'https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js', 5000.00, 14000.00, 1);