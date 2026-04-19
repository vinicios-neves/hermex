import { Logo } from "@/components/atoms";
import { NavLink, TextField } from "@/components/molecules";

export function Header() {
  return (
    <header className="w-full bg-neutral-white">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Logo />

        <TextField
          icon="search"
          type="search"
          placeholder="O que você procura?"
          aria-label="Buscar"
          className="hidden flex-1 max-w-md md:flex"
        />

        <nav
          aria-label="Acesso da conta"
          className="flex items-center gap-6"
        >
          <NavLink icon="account_circle" label="Cadastro" href="/cadastro" />
          <NavLink icon="login" label="Login" href="/login" />
        </nav>
      </div>
    </header>
  );
}
