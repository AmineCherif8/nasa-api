import { HttpModule, HttpService } from "@nestjs/axios";
import { Test } from "@nestjs/testing";
import { MarsRoverService } from "../service/mars-rover.service";
import { MarsRoverController } from "./mars-rover.controller";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CacheInterceptor, CacheModule } from "@nestjs/common";

describe("RoversController", () => {
  let catsController: MarsRoverController;
  let catsService: MarsRoverService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MarsRoverController],
      providers: [
        MarsRoverService,
        {
          provide: APP_INTERCEPTOR,
          useClass: CacheInterceptor,
        },
      ],
      imports: [CacheModule.register(), HttpModule],
    }).compile();

    catsService = await moduleRef.get<MarsRoverService>(MarsRoverService);
    catsController = await moduleRef.get<MarsRoverController>(
      MarsRoverController
    );
  });

  describe("getMarsRovers", () => {
    it("should return an array of rovers", async () => {
      const result = await catsService.getAllMarsRover(
        200,
        "FHAZ",
        "Curiosity"
      );

      expect(
        await catsController.getMarsRover(200, "FHAZ", "Curiosity")
      ).toStrictEqual(result);
    });
  });
});
