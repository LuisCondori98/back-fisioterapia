import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";

passport.use(new FacebookStrategy({

  clientID: process.env.FACEBOOK_ID || "817846854540409",
  clientSecret: process.env.FACEBOOK_SECRET || "1126480146288434",
  callbackURL: "/auth/facebook/callback",
  profileFields: ["id", "email"]
}, async (accesToken, refreshToken, profile, done) => {

  console.log(profile)

  return done(null, profile)
}))

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((obj, done) => done(null, obj))

export default passport;