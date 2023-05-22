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
INSERT INTO plaid_accounts (account_id, plaid_account_id) VALUES (1, '8Jyl3X1AxSwvnjRbQNRCx8eplAaAbfMoqgxm');
INSERT INTO plaid_accounts (account_id, plaid_account_id) VALUES (2, 'Wd4Qq9Mr8WsdRxZ1vy61H9zXZpExEdh4RKlkb');
INSERT INTO plaid_accounts (account_id, plaid_account_id) VALUES (3, '83R1yQmzwbhl4J7WnbrWTL5XBRr7refrnjwbA');

-- insert categories
INSERT INTO categories (name) VALUES ('FOOD_AND_DRINK');
INSERT INTO categories (name) VALUES ('TRANSPORTATION');
INSERT INTO categories (name) VALUES ('RENT_AND_UTILITIES');
INSERT INTO categories (name) VALUES ('TRAVEL');
INSERT INTO categories (name) VALUES ('PERSONAL_CARE');
INSERT INTO categories (name) VALUES ('INCOME');
INSERT INTO categories (name) VALUES ('GENERAL_MERCHANDISE');
INSERT INTO categories (name) VALUES ('HOME_IMPROVEMENT');
INSERT INTO categories (name) VALUES ('GENERAL_SERVICES');
INSERT INTO categories (name) VALUES ('GOVERNMENT_AND_NON_PROFIT');
INSERT INTO categories (name) VALUES ('MEDICAL');
INSERT INTO categories (name) VALUES ('ENTERTAINMENT');
INSERT INTO categories (name) VALUES ('LOAN_PAYMENTS');
INSERT INTO categories (name) VALUES ('TRANSFER_OUT');
INSERT INTO categories (name) VALUES ('TRANSFER_IN');
INSERT INTO categories (name) VALUES ('OTHER');

-- insert transactions
INSERT INTO transactions (account_id, transaction_date, transaction_amount, name, category_id, is_credit_card)
VALUES 
    (2,'2023-05-01', 35.12, 'Starbucks', 1, true),
    (2,'2023-05-18', 15.12, 'The Patty Shop_F', 1, true),
    (2,'2023-05-02', 82.47, 'Safeway #4979', 1, true),
    (2,'2023-05-21', 87.02, 'Lunch Lady', 1, true),
    (2,'2023-05-12', 102.72, 'H-MART Dunbar', 1, true),
    (2,'2023-05-09', 8.67, 'Starbucks', 1, true),
    (2,'2023-05-08', 10.97, 'Starbucks', 1, true),
    (2,'2023-05-01', 76.97, 'BC Liquor #136', 1, true),
    (2,'2023-05-07', 31.63, 'BC Liquor #136', 1, true),
    (2,'2023-05-02', 101.97, 'Zarak by Afghan Kitchen', 1, true),
    (2,'2023-05-16', 106.60, 'Safeway #4979', 1, true),
    (2,'2023-05-04', 56.78, 'Uber 072515 SF**POOL*', 2, true),
    (2,'2023-05-08', 49.14, 'Uber 087515 SF**POOL**', 2, true),
    (2,'2023-05-02', 21.14, 'Uber 072512 SF**POOL**', 2, true),
    (2,'2023-05-14', 21.14, 'Honk Parking', 2, true),
    (2,'2023-05-10', 10.14, 'City of Van PAYBYPHONE', 2, true),
    (2,'2023-05-11', 31.12, 'City of Van PAYBYPHONE', 2, true),
    (2,'2023-05-06', 42.11, 'PURE Nail Bar', 5, true),
    (2,'2023-05-15', 30.11, 'PURE Nail Bar', 5, true),
    (2,'2023-05-07', 6.23, 'Subway', 1, true),
    (2,'2023-05-12', 9.99, 'Spotify', 12, true),
    (2,'2023-05-12', 9.99, 'DAZN', 12, true),
    (2,'2023-05-07', 4.99, 'Apple Music', 12, true),
    (2,'2023-05-04', 15.49, 'Netflix', 12, true),
    (2,'2023-05-08', 11.99, 'Disney Plus', 12, true),
    (2,'2023-05-03', 6.99, 'Hayu', 12, true),
    (2,'2023-05-15', 300.00, 'Richmond Shine Dental', 11, true),
    (1,'2023-05-01', 1200.00, 'AUTOMATIC PAYMENT - THANKS', 3, false),
    (1,'2023-05-04', -1100.00, 'Lighthouse Labs',  6, false),
    (1,'2023-05-18', -1100.00, 'Babysitting',  6, false),
    (1,'2023-05-21', -762.00, 'Etsy',  6, false),
    (1,'2023-05-19', 17.89, 'Subway', 1, false),
    (1,'2023-05-23', 68.70, 'Telus Comm BPY', 3, false);

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
INSERT INTO plant_goals (name, interactive_image, tracked_amount, target_amount, user_id) VALUES ('Trip to Mexico', 'https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js', 2000.00, 3000.00, 1);
INSERT INTO plant_goals (name, interactive_image, tracked_amount, target_amount, user_id) VALUES ('Pay off tuition', 'https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js', 14000.00, 14000.00, 1);
INSERT INTO plant_goals (name, interactive_image, tracked_amount, target_amount, user_id) VALUES ('Buy a new Jacket', 'https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js', 300.00, 300.00, 1);

INSERT INTO category_goals (category_id, amount, user_id) VALUES (1, 800.00, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (2, 200.00, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (3, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (4, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (5, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (6, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (7, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (8, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (9, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (10, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (11, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (12, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (13, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (14, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (15, 0, 1);
INSERT INTO category_goals (category_id, amount, user_id) VALUES (16, 0, 1);