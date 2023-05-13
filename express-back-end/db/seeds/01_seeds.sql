-- -- insert user and admin account
-- INSERT INTO users (name, email, phone_number, password, is_admin) VALUES ('Yuqin Hu', 'admin@example.com', '123-456-7890', 'adminpassword', TRUE);
-- INSERT INTO users (name, email, phone_number, password) VALUES ('test user', 'test.user@example.com', '987-654-3210', 'password');

-- -- insert 3 types of niches
-- INSERT INTO niches (name) VALUES ('shoes');
-- INSERT INTO niches (name) VALUES ('clothes');
-- INSERT INTO niches (name) VALUES ('pants');

-- -- insert several items
-- INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
-- VALUES (1, 1, 'Nike Air Max 97', 'Black and white running shoes', 150, 'https://static.nike.com/a/images/t_default/17429711-d516-439b-a220-fcd592672743/air-max-97-shoes-P0R4Hb.png');
-- INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
-- VALUES (1, 1, 'Adidas Ultraboost', 'Grey and orange sneakers', 180, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/49172f9e42bd4b5d9989abed00994cb0_9366/Ultraboost_WINTER.RDY_Shoes_Grey_EG9800_01_standard.jpg');
-- INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
-- VALUES (1, 1, 'Converse Chuck Taylor', 'Classic black high tops', 60, 'https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9160_a_107x1_2nd.jpg');