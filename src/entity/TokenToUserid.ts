import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity()
@Index(["token", "userid"], { unique: true })
@Index(["userid"], { unique: false })
export class TokenToUserid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  os: string;

  @Column()
  userid: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created: Date;
}
