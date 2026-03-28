export class LoginPage {
    constructor(page) {
        this.page = page;

        // Login selectors
        this.loginEmail = '[data-qa="login-email"]';
        this.loginPassword = '[data-qa="login-password"]';
        this.loginBtn = '[data-qa="login-button"]';

        // Signup selectors
        this.signupName = '[data-qa="signup-name"]';
        this.signupEmail = '[data-qa="signup-email"]';
        this.signupBtn = '[data-qa="signup-button"]';

        // Signup form selectors
        this.password = '#password';
        this.gender = '#id_gender1';
        this.firstName = '#first_name';
        this.lastName = '#last_name';
        this.address = '#address1';
        this.country = '#country';
        this.state = '#state';
        this.city = '#city';
        this.zipcode = '#zipcode';
        this.mobile = '#mobile_number';
        this.createAccountBtn = '[data-qa="create-account"]';

        // Validation
        this.accountCreatedText = 'text=Account Created';
        this.loginError = 'text=Your email or password is incorrect';
    }

    async gotoLogin() {
        await this.page.goto('/login');
    }

    async login(email, password) {
        await this.page.fill(this.loginEmail, email);
        await this.page.fill(this.loginPassword, password);
        await this.page.click(this.loginBtn);
    }

    async signup(name, email, password) {
        await this.page.fill(this.signupName, name);
        await this.page.fill(this.signupEmail, email);
        await this.page.click(this.signupBtn);

        await this.page.fill(this.password, password);
        await this.page.click(this.gender);

        await this.page.fill(this.firstName, name);
        await this.page.fill(this.lastName, 'Test');
        await this.page.fill(this.address, 'Test Address');

        await this.page.selectOption(this.country, 'India');
        await this.page.fill(this.state, 'Karnataka');
        await this.page.fill(this.city, 'Bangalore');
        await this.page.fill(this.zipcode, '560001');
        await this.page.fill(this.mobile, '9999999999');

        await this.page.click(this.createAccountBtn);

        await this.page.waitForSelector(this.accountCreatedText);
    }

    async loginOrSignup(name = 'Ashish', password = 'Test@123') {
        await this.gotoLogin();

        const email = `test${Date.now()}@mail.com`;

        await this.login(email, password);

        const errorVisible = await this.page.locator(this.loginError).isVisible().catch(() => false);

        if (errorVisible) {
        await this.signup(name, email, password);
        }

        return { email, password };
    }
}