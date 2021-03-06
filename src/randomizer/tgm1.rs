//! Implements the TGM1 randomizer

use std::collections::VecDeque;
use rand::{self, Rng};
use block::Id;
use randomizer::Randomizer;

gen_rand!(TGM1Randomizer);

/// A TGM1 randomizer.
//
/// This generates a completely arbitrary sequence of `Id`'s.
#[derive(Clone)]
pub struct TGM1Randomizer {
    /// The lookahead buffer.
    lookahead: VecDeque<Id>,

    /// The rng used to generate random values
    rng: rand::ThreadRng,

    /// History of blocks
    history: [Id; 4],

    /// How many rolls are performed per iteration
    rolls: usize,

    /// Is this the first piece?
    first: bool,
}

impl TGM1Randomizer {
    /// Return a new `TGM1Randomizer` instance.
    pub fn new(lookahead: usize) -> TGM1Randomizer {
        TGM1Randomizer {
            lookahead: VecDeque::with_capacity(lookahead),
            rng: rand::thread_rng(),
            history: [Id::Z; 4],
            rolls: 4,
            first: true
        }
    }

    fn next_block(&mut self) -> Id {
        let mut piece = Id::None;

        if self.first {
            const SZO: [Id; 3] = [Id::S, Id::Z, Id::O];
            for _ in 0..self.rolls {
                piece = *self.rng.choose(Id::variants()).unwrap();
                if !SZO.contains(&piece) {
                    break;
                }
            }
            self.first = false;
        }
        else {
            loop {
                // Generate a random piece and check if it is in history
                piece = *self.rng.choose(Id::variants()).unwrap();
                if !self.history.contains(&piece) {
                    break;
                }
            }
        }

        for i in (1..self.history.len()).rev() {
            self.history[i] = self.history[i - 1];
        }
        self.history[0] = piece;
        piece
    }
}
