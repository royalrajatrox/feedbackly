const passport = require("passport");
const {Strategy: GoogleStrategy} = require("passport-google-oauth20");
const mongoose = require('mongoose');
const keys = require("../config/keys");




const User = mongoose.model('users');

passport.serializeUser( (user, done) => {
    done(null, user.id);
    // done 1 argument is error and identifying piece of information
    // user.id 2 argument is the unique id of the record in the database inside collection
});

passport.deserializeUser((id, done) => {
    User.findById(id).
        then(user => {
            done(null, user);
    })
});

passport.use(
    new GoogleStrategy(
        {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
            // using the keys of google API
    },
        async (accessToken, refreshToken, profile, done) => {
            // done is called when authentication is done
        const existingUser = await User.findOne({googleId: profile.id})

                // this existingUser is come from the database
         if (existingUser){
                    // we already have a record of the user
         done(null, existingUser);
         }else{
                    // that means we dont have the user
         const user = await new User({ googleId: profile.id }).save()
             done(null, user);
         }



    }

    )
);




// I have commented the old way of handling the promises !!!!!

//     (accessToken, refreshToken, profile, done) => {
//     // done is called when authentication is done
//     User.findOne({googleId: profile.id})
//         .then( (existingUser) => {
//             // this existingUser is come from the database
//             if (existingUser){
//                 // we already have a record of the user
//                 done(null, existingUser);
//             }else{
//                 // that means we dont have the user
//                 new User({ googleId: profile.id }).
//                 save().
//                 then(user => done(null, user));
//
//             }
//         })
//
//
// }