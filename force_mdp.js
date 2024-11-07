function CheckForceMDP(password) {
    let strength = 0;

    
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    if (strength <= 2) {
        return "Faible";
    } else if (strength <= 4) {
        return "Moyen";
    } else if (strength <= 5) {
        return "Fort";
    } else {
        return "Tres fort";
    }
}
