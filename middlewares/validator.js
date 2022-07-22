const { check, validationResult } = require("express-validator");



exports.registerRules = () =>[
    check('fullName','This field is required').notEmpty(),
    check('email' , 'This field is required').notEmpty(),
    check('email' , 'This field should be a valid email').isEmail(),
    check('phone','This field is required').notEmpty(),
    
    check('password','This fieldshould be at least 6 characters').isLength({ min: 6}),
];
exports.loginRules = () =>[
    check('email' , 'This field is required').notEmpty(),
    check('email' , 'This field should be a valid email').isEmail(),
    check('password','This fieldshould be at least 6 characters').isLength({ min: 6}),

];
exports.validator = (req,res,next) => {
    const errors = validationResult(req);
    errors.isEmpty()? next() : res.status(406).json({errors: errors.array()})
};