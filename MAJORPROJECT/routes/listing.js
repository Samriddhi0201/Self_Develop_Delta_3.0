const express = require('express');
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync =require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema} = require("../schema.js");
const {isLoggedIn} =require("../middleware.js")

const validateListing =(req, res , next)=>{
    let {error } = listingSchema.validate(req.body);
    console.log(error)
    if(error){
        let  errMsg = error.details.map((el) =>el.message).join(",");
        // console.log(errMsg);
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
}



//Index Route

router.get("/" , wrapAsync(async (req , res) =>{
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings})
 }));
 
 //New Route
 
 router.get("/new" ,isLoggedIn , wrapAsync(async(req, res) =>{
    //console.log(req.user);
   
     res.render("listings/new.ejs");
 }));
 
 //Show Route
 
 router.get("/:id" , wrapAsync(async(req, res) =>{
     let { id } = req.params;
     const listing = await Listing.findById(id).populate("reviews").populate("owner");
     if(!listing){
        req.flash("error", "Requested Listing does not exists!");
        res.redirect("/listings");
     }
     console.log(listing);
     res.render("listings/show.ejs", {listing});
 }));
 
 //Create Route
 router.post("/" , isLoggedIn , validateListing,  wrapAsync(async(req, res, next) =>{
    // let { title, description , image , price, country , location } = req.body;
    // let listing = req.body.listing;
    
     const newListing = new Listing(req.body.listing);
     newListing.owner = req.user._id;
     await newListing.save();
    // console.log(listing);
    req.flash("success", "New Listing Created!");
     res.redirect("/listings");
 }));

 //Edit Route
 
 router.get("/:id/edit", isLoggedIn ,wrapAsync(async  (req, res) =>{
    let { id } =req.params;
    const listing = await Listing.findById(id);
    req.flash("success", "Listing Edited Successfully!");
    if(!listing){
        req.flash("error", "Requested Listing does not exists!");
        res.redirect("/listings");
     }
    res.render("listings/edit.ejs", {listing});
}));

//Update Route
router.put("/:id",isLoggedIn ,validateListing, wrapAsync(async  (req, res) =>{
    let { id } =req.params;
    // if(!req.body.listing){
    //     throw new ExpressError(400 ,"Send Valid Data For Listings" )
    // }
    let listing = await Listing.findById(id);
    if(!currUser && listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "You don't have permission to edit");
        return res.redirect(`/listings/${id}`);
    }
   await Listing.findByIdAndUpdate(id ,{...req.body.listing});
   req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id", isLoggedIn , wrapAsync(async(req, res) =>{
    let { id } =req.params;
   let deletedListing = await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   req.flash("success", "Listing Deleted Succesfully!");
   res.redirect("/listings");
}));

module.exports = router;