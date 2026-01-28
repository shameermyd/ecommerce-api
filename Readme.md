##Project Structure

iboson-ecommerce/
├── package.json
├── server.js
├── .env
└── src/
    ├── app.js
    ├── config/
    │   └── database.js
    ├── modules/
    │   ├── user/
            ├── models/
    │   │   |  └── user.model.js
    │   │   ├── controller/
    |   |   |   └── user.controller.js
    │   │   ├── service/
    |   |   |   └── user.service.js
    │   │   └── routes/
    |   |       └── user.routes.js
    │   ├── product/
    │   │   ├── product.model.js
    │   │   ├── product.controller.js
    │   │   ├── product.service.js
    │   │   └── product.routes.js
    │   └── purchase/
    │       ├── purchase.model.js
    │       ├── purchase.controller.js
    │       ├── purchase.service.js
    │       └── purchase.routes.js
    └── middleware/
        └── auth.js