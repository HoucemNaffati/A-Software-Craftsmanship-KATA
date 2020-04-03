export interface MessageGenerator {
	isValidRule(time: Date): boolean;
	generate(): string;
}