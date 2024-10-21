import { Controller, Get, Render, Param, Delete, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './createproduct.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  #products = [
    {
      name: 'Bucket',
      prize: 2500
    },
    {
      name: 'REST API haha',
      prize: 2500
    },
    {
      name: 'Table',
      prize: 2500
    }
  ];

  @Get('products')
  listProduct() {
    return this.#products;
  }

  @Get('products/:id')
  listSpec(@Param('id') id: string) {
    return this.#products[Number(id)];
  }

  @Delete('products/:id')
  delSpec(@Param('id') id: string) {
    return this.#products.splice(Number(id), 1);
  }

  @Post('products')
  newProduct(@Body() createProductDto: CreateProductDto) {
    this.#products.push(createProductDto);
  }
}
