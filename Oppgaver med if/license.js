let age = 25;
let hasLicense = false;

if (age >= 16) {
    console.log("You are old enogh to drive");

    if (hasLicense) {
        console.log("You have your license!");
    }
    else {
        console.log("ypu do not have your license yet!");
    }
}
else {
    console.log("You must be 16+ to have a license");
}