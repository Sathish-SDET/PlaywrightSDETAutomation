const Ajv = require('ajv');

class SchemaValidator 
{
    static validate (data,schema)
    {
        const ajv = new Ajv({allErrors:true});
        const validate = ajv.compile(schema);
        const valid = validate(data);
        if(!valid)
        {
            console.error('Schema Validation Error');
            console.error(validate.errors);
            throw new Error('Schema Validation Failed');
        }
        return true;
    }
}
module.exports = SchemaValidator;