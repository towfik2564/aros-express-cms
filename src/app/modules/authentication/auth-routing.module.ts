import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
    {
        path: "auth",
        children: [
            {
                path: "signin",
                component: SignInComponent
            },
            // {
            //     path: "signup",
            //     component: SignUpComponent
            // }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
