
public class Main {

	public static void main(String[] args) {
		Conta cc = new ContaCorrente();
		cc.depositar(100);
		
		Conta cp = new ContaPoupanca();
		cc.transferir(cp, 50);
				
		cc.imprimirExtrato();
		cp.imprimirExtrato();
	}
}