import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogueModule } from './catalogue/catalogue.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://telus:telus@cluster0.ojnvn.mongodb.net/catalogue?retryWrites=true&w=majority',
    ),
    CatalogueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
