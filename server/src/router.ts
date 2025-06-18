import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/programs", (req, res) => {
  res.json(programs);
});

// // Message welcome

// import type { RequestHandler } from "express";

// const welcome: RequestHandler = (req, res) => {
//   res.send("Welcome to the wild series!");
// };
import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */

export default router;
