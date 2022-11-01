import { HttpModule } from "@nestjs/axios";
import { Test } from "@nestjs/testing";
import { MarsRoverService } from "../service/mars-rover.service";
import { MarsRoverController } from "./mars-rover.controller";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CacheInterceptor, CacheModule } from "@nestjs/common";

describe("RoversController", () => {
  let marsRoverController: MarsRoverController;
  let marsRoverService: MarsRoverService;
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

    marsRoverService = await moduleRef.get<MarsRoverService>(MarsRoverService);
    marsRoverController = await moduleRef.get<MarsRoverController>(
      MarsRoverController
    );
  });

  describe("getMarsRovers", () => {
    it("should return an array of rovers", async () => {
      const result = await marsRoverService.getAllMarsRover(
        200,
        "FHAZ",
        "Curiosity"
      );

      expect(
        await marsRoverController.getMarsRover(200, "FHAZ", "Curiosity")
      ).toStrictEqual(result);
    });
  });
});
