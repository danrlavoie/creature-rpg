import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    playerParty: [
        '000001',
    ],
    enemyParty: [
        '000002',
        '000003',
    ],        
    creatures: {
        '000001': {
            name: 'Barry',
            species: 'BlueJay',
            currentHP: 30,
            maxHP: 40,
            attack: 5,
            defense: 5,
            speed: 4,
        },
        '000002': {
            name: 'BlueJay',
            species: 'BlueJay',
            currentHP: 40,
            maxHP: 40,
            attack: 5,
            defense: 5,
            speed: 5,
        },
        '000003': {
            name: 'BlueJay',
            species: 'BlueJay',
            currentHP: 30,
            maxHP: 30,
            attack: 5,
            defense: 5,
            speed: 3,
        }
    },
});

const creature = (state = initialState, action) => {
    switch(action.type) {

        default: return state;
    }
};

export default creature;