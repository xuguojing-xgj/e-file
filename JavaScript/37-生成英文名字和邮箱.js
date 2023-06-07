function generateRandomName() {
    const names = ['John', 'Jane', 'Alice', 'Bob', 'Emily', 'David', 'Linda', 'Michael', 'Olivia', 'William'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function generateRandomEmail(name) {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
    const randomIndex = Math.floor(Math.random() * domains.length);
    const domain = domains[randomIndex];
    const randomNum = Math.floor(Math.random() * 10000);
    return `${name.toLowerCase()}_${randomNum}@${domain}`;
}

const generatedData = [];
for (let i = 0; i < 10; i++) {
    const name = generateRandomName();
    const email = generateRandomEmail(name);
    generatedData.push({ name, email });
}

console.log(generatedData);
