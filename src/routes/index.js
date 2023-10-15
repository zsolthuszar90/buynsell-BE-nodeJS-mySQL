import { addViewToListingRoute } from "./addViewToListing.js";
import { createNewListingRoute } from "./createNewListing.js";
import { deleteListingRoute } from "./deleteListing.js";
import { getAllListingsRoute } from "./getAllListings.js";
import { getListingRoute } from "./getListing.js";
import { getUserListingsRoute } from "./getUserListings.js";
import { updateListingRoute } from "./updateListing.js";

export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updateListingRoute,
  deleteListingRoute
]