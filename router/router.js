import express from "express";
import {
  getCollections,
  getCollectionWithId,
  createCollection,
  deleteCollection,
  updateCollection,
} from "../controllers/collection.js";
import {
  getProjects,
  getProjectWithId,
  createProject,
  deleteProject,
  updateProject,
} from "../controllers/project.js";
import {
  getParagraphs,
  getParagraphWithId,
  createParagraph,
  deleteParagraph,
  updateParagraph,
} from "../controllers/paragraph.js";
import {
  getPictures,
  getPictureWithId,
  createPicture,
  deletePicture,
  updatePicture,
} from "../controllers/picture.js";

import { getIcons, getIconsWithId } from "../controllers/icon.js";
import { getProject_Icon } from "../controllers/PI.js";

import { checklogin } from "../Login/login.js";
import { CustomQuery } from "../Admin/CustomSql.js";
const router = express.Router();

router.get("/collections", getCollections);
router.get("/collections/:id", getCollectionWithId);

router.post("/collections", createCollection);
router.delete("/collections/:id", deleteCollection);
router.put("/collections/:id", updateCollection);

router.get("/projects", getProjects);
router.get("/projects/:id", getProjectWithId);

router.post("/projects", createProject);
router.delete("/projects/:id", deleteProject);
router.put("/projects/:id", updateProject);

router.get("/paragraphs", getParagraphs);
router.get("/paragraphs/:id", getParagraphWithId);

router.post("/paragraphs", createParagraph);
router.delete("/paragraphs/:id", deleteParagraph);
router.put("/paragraphs/:id", updateParagraph);

router.get("/pictures", getPictures);
router.get("/pictures/:id", getPictureWithId);

router.post("/pictures", createPicture);
router.delete("/pictures/:id", deletePicture);
router.put("/pictures/:id", updatePicture);

router.get("/icons", getIcons);
router.get("/icons/:id", getIconsWithId);

router.get("/p_i", getProject_Icon);

router.post("/login", checklogin);

router.post("/customquery", CustomQuery);
export default router;
