const Hobbits = require('./hobbitsModel.js');
const db = require('../database/dbConfig.js');

describe('hobbits model', function() {
    
    
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
     
    describe('insert()', function() {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })

        it('adds the new hobbit to the db', async function() {
            // call insert passing a hobbit
            await Hobbits.insert({ name: 'sam' });
            await Hobbits.insert({ name: 'frodo' });

            // open the db and see that the hobbit is there
            const hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(2);
        })
        
        it('adds the new hobbit to the db', async function() {
            // call insert passing a hobbit
            await Hobbits.insert({ name: 'sam' });
            await Hobbits.insert({ name: 'frodo' });

            // open the db and see that the hobbit is there
            const hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(2);
        })


    })
    describe('delete()', function() {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })

        it('removes the hobbit from the db', async function() {
            // check that the table is empty

            // add a hobbit
            await Hobbits.insert({name: 'carlos' });
            

            // check that the hobbit is there
            const hobbits = await db('hobbits');
            expect (hobbits).toHaveLength(1);
            
            // delete the hobbit
            await Hobbits.remove(2);
            expect (hobbits).toHaveLength(1)
            // check that the hobbit is gone 
        
        })


    })
    
})