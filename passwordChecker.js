function checkPasswordStrength(password) {
    // Перевірка довжини пароля
    if (password.length < 8) {
        return "Weak";
    }

    // Перевірка наявності цифр
    const hasDigit = /\d/.test(password);

    // Перевірка наявності великих і малих літер
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    // Визначення складності пароля
    if (hasDigit && hasUppercase && hasLowercase) {
        return "Strong";
    }

    return "Weak";
}

// Приклади використання
console.log(checkPasswordStrength("password"));    // Weak
console.log(checkPasswordStrength("Password123")); // Strong
console.log(checkPasswordStrength("12345678"));    // Weak