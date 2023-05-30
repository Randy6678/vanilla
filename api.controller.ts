import { Controller, Get, Query } from '@nestjs/common';
// swagger
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiResponse,
} from '@nestjs/swagger';

// services
import { ApiService } from './api.service';

// dtos
import { GetRegionsQueryDto } from '../ding-connect/dto/getRegionsQuery.dto';
import { GetAccountLookupQueryDto } from '../ding-connect/dto/getAccountLookupQuery.dto';
import { GetProductDescriptionsQueryDto } from '../ding-connect/dto/getProductDescriptionsQuery.dto';
import { GetProductsQueryDto } from '../ding-connect/dto/getProductsQuery.dto';
import { GetPromotionDescriptionsQueryDto } from '../ding-connect/dto/getPromotionDescriptionsQuery.dto';
import { GetPromotionsQueryDto } from '../ding-connect/dto/getPromotionsQuery.dto';
import { GetProvidersQueryDto } from 'src/ding-connect/dto/getProvidersQuery.dto';
import { GetProviderStatusQueryDto } from 'src/ding-connect/dto/getProviderStatusQuery.dto';

@ApiTags('api')
@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  // Get Supported Country Account Lookup
  @ApiOperation({
    summary:
      'Get providers and product information for a specific supported account number (phone number)',
    description:
      'Returns country, provider and region code details for the account number. This information can be then be used as input parameters to `GetProducts`',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetAccountLookup')
  async getAccountLookup(@Query() query: GetAccountLookupQueryDto) {
    const accountNumber = query.accountNumber;

    return this.apiService.getAccountLookup(accountNumber);
  }

  // Get App Supported Countries
  @ApiOperation({
    summary: 'Get a list of app supported countries',
    description:
      'Retrieves a list of standard two letter country codes that the system supports, along with the country name in English.',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetCountries')
  async getCountries() {
    return this.apiService.getCountries();
  }

  // Get App Supported Currencies
  @ApiOperation({
    summary: 'Get a list of app supported currencies',
    description:
      'Retrieves a list of standard three letter currency codes that the system supports, along with the currency name in English.',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetCurrencies')
  async getCurrencies() {
    return this.apiService.getCurrencies();
  }

  // Get App Supported Product Descriptions
  @ApiOperation({
    summary: 'Get localized strings for app supported products descriptions',
    description: 'Please see the documentation section on localization.',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetProductDescriptions')
  async getProductDescriptions(
    @Query()
    query: GetProductDescriptionsQueryDto,
  ) {
    return this.apiService.getProductDescriptions(query);
  }

  // Get App Supported Products
  @ApiOperation({
    summary:
      'Get a list of app supported products that can be used in SendTransfer',
    description:
      'This API returns a list of available products that satisfy request criteria.',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetProducts')
  async getProducts(
    @Query()
    query: GetProductsQueryDto,
  ) {
    return this.apiService.getProducts(query);
  }

  // Get App Supported Promotion descriptions
  @ApiOperation({
    summary: 'Get localized strings for promotions',
    description: 'Please see the documentation section on localization.',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetPromotionDescriptions')
  async getPromotionDescriptions(
    @Query()
    query: GetPromotionDescriptionsQueryDto,
  ) {
    return this.apiService.getPromotionDescriptions(query);
  }

  // Get App Supported Promotions
  @ApiOperation({
    summary: 'Get a list of app supported promotions',
    description:
      'Returns a list promotions that may apply for the submitted criteria.',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetPromotions')
  async getPromotions(
    @Query()
    query: GetPromotionsQueryDto,
  ) {
    return this.apiService.getPromotions(query);
  }

  // Get App Supported Providers
  @ApiOperation({
    summary:
      'Get a list of app supported product providers available to the agent',
    description: 'Retrieves the list of providers available to the agent.',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetProviders')
  async getProviders(
    @Query()
    query: GetProvidersQueryDto,
  ) {
    return this.apiService.getProviders(query);
  }

  // GetProviderStatus
  @ApiOperation({
    summary: 'Get the current status of product providers',
    description:
      'Providers can be suspended or be in an error state. This API allows an agent to find out if it will be possible to send a transfer to a particular provider.',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetProviderStatus')
  async getProviderStatus(
    @Query()
    query: GetProviderStatusQueryDto,
  ) {
    return this.apiService.getProviderStatus(query);
  }

  // Get App Supported Regions
  @ApiOperation({
    summary: 'Get a list of app supported regions on the system',
    description:
      'Retrieves a list of app supported regions used in the system. Each region includes a Region Code, Region Name and CountryIso.',
  })
  @ApiOkResponse({
    description: 'Operation Sucessfull',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    description: 'Session not authorized',
  })
  @Get('GetRegions')
  async getRegions(
    @Query()
    query: GetRegionsQueryDto,
  ) {
    return this.apiService.getRegions(query);
  }
}
