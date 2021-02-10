import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.types';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  authProvider = AuthProvider;
  configs = {
    isSignIn: true,
    action: 'Login',
    actionChange: 'Registrar-se',
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private overlayService: OverlayService,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.authForm.get('password') as FormControl;
  }

  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Login' : 'Registrar';
    this.configs.actionChange = isSignIn ? 'Criar conta' : 'Já possuo conta';
    
  }

  async onSubmit(provider: AuthProvider): Promise<void> {
    const loading = await this.overlayService.loading();
    try {
      const credentials = await this.authService.authenticated({
        isSignIn: this.configs.isSignIn,
        user: this.authForm.value,
        provider,
      });
      console.log('Authenticated: ', credentials);
      console.log('Redirecting...');
    } catch (e) {
      console.log('Auth error: ', e);
      await this.overlayService.toast({
        message: e.message,
      });
    } finally {
      loading.dismiss();
    }
  }
}
 