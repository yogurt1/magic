use std::io::{Write, stdout, stdin};
use std::cmp::Ordering::{Equal};

fn flush() {
    stdout().flush().unwrap();
}

fn main() {
    println!("Russian rulette! ");
    let secret = 67;

    loop {
        print!("You guess: ");
        stdout().flush().unwrap();

        let mut guess = String::new();

        stdin().read_line(&mut guess)
            .expect("Can't read string");

        let guess: u8 = match guess.trim().parse() {
            Ok(n) => n,
            Err(_) => continue,
        };

        match guess.cmp(&secret) {
            Equal => {
                print!("V");
                flush();
                break;
            },
            _ => {
                print!("X");
                flush();
            }
        }
    }
}
